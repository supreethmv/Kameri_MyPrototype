from app import create_app, db
import config
from flask_migrate import Migrate

# flaSK cORS Deaktiviren
from flask_cors import CORS
# flaSK cORS Deaktiviren

app = create_app(config)
migrate = Migrate(app, db)

# enable CORS
CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, threaded=True)
