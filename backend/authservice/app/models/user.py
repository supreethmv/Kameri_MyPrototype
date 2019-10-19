from app import db, ma
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
from app.models.organisation import *


class UserModel(db.Model):
    __tablename__ = 'user_model'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(128))
    uuid = db.Column(db.String, index=True)
    first_name = db.Column(db.String(64), index=True)
    last_name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True)
    organisation = db.relationship(
        'OrganisationModel')

    def __init__(self, password, first_name, last_name, email, organisation):
        self.uuid = uuid.uuid4().hex
        self.password = generate_password_hash(password)
        self.organisation = organisation
        self.first_name = first_name
        self.last_name = last_name
        self.email = email

    def check_password(self, password):
        return check_password_hash(self.password, password)

    @classmethod
    def find_by_uuid(cls, uuid):
        return cls.query.filter_by(uuid=uuid).first()

    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    @classmethod
    def find_all_users(cls):
        return cls.query.all()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()


class UserSchema(ma.ModelSchema):
    # organisation = ma.Pluck("OrganisationSchema", 'name', many=True)
    organisation = ma.Nested("OrganisationSchema", many=True)

    class Meta:
        model = UserModel
        # fields = ('uuid', 'first_name', 'last_name', 'email', 'organisation', )
