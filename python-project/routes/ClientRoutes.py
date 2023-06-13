from flask import Blueprint
from controllers.ClientController import index

client = Blueprint('client_routes', __name__)

client.route('/', methods=['GET'])(index)