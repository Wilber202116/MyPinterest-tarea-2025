from .auth import auth_bp
from .image import image_bp

def create_api(app):
    #/api(esto es un prefijo)/login, tener un mejor control de las rutas
    app.register_blueprint(auth_bp, url_prefix= '/api')
    app.register_blueprint(image_bp, url_prefix= '/api')

