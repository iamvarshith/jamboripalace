from config import Config, Secrets
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from oauthlib.oauth2 import WebApplicationClient

app = Flask(__name__)
app.config.from_object(Config)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)


login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message = u"Please Login to continue"
login_manager.login_message_category = "info"

bcrypt = Bcrypt(app)
migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)

client = WebApplicationClient(Secrets.GOOGLE_CLIENT_ID)

from app import views
