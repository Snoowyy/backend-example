from flask import Flask

from models.Client import db
from routes.ClientRoutes import client

app = Flask(__name__)
app.config.from_object('config')

db.init_app(app)

app.register_blueprint(client, url_prefix='/clients')

if __name__ == '__main__':
    app.debug = True
    app.run()