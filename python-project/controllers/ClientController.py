from flask import render_template, redirect, url_for, request, abort

from models.Client import Client

from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

def index():
    ...
