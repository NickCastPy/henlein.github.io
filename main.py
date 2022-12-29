from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(250), unique = True)
    img_src = db.Column(db.String(250), unique = True)
    background_src = db.Column(db.String(250), unique = True)

@app.route('/')
def main():
    products = Product.query.all()
    return render_template('index.html', products=products)

if __name__ == '__main__':
    app.run()