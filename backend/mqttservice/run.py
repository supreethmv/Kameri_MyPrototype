from app import create_app, db, mqtt, api
import config
from flask_migrate import Migrate


app = create_app(config)
migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, threaded=True)
