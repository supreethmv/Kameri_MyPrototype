from app import db, ma
from app.models.user import *


class OrganisationModel(db.Model):
    __tablename__ = 'organisation_model'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_model.id'))

    def __init__(self, name):
        self.name = name


class OrganisationSchema(ma.ModelSchema):

    class Meta:
        model = OrganisationModel
        # fields = ('name',)
