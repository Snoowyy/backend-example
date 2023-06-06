from flask import Flask, request, redirect, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
 
### CONFIGURACION DE LA BASE DE DATOS
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'casatrans'
mysql = MySQL(app)

@app.route("/")
def users():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    try: 
        cursor.execute('SELECT * FROM user')
        return jsonify({ "status": 'Success', "data": cursor.fetchall()})
    except:
        return jsonify({ "status": 'Error', "data": []})

if __name__ == "__main__":
    app.run(host="localhost", port=int("5000"))