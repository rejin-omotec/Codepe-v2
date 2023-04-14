from flask import Flask, render_template,request
import sys
from io import StringIO


code_run = False

app = Flask(__name__)


@app.route('/',methods = ['POST','GET'])
def index():
    if request.method == 'POST':
        code_string = request.get_data().decode()
        
        # print(code_string)
        
        codeOut = StringIO()
        codeErr = StringIO()
        
        sys.stdout = codeOut
        sys.stderr = codeErr
        
        try:
            exec(code_string)
        except Exception:
            pass
        else:
            code_run = True
        
        if code_run:
            o = codeOut.getvalue()
        else:
            o = codeErr.getvalue()

        sys.stdout = sys.__stdout__
        sys.stderr = sys.__stderr__
        
        codeOut.close()
        codeErr.close()
        
        return o
    else:
        return render_template("index.html")



@app.route('/block_hindi')
def block_hindi():
    return render_template('block_hindi.html')

@app.route('/index')
def load_index():
    return render_template('index.html')

@app.route('/block_bengali')
def block_bengali():
    return render_template('block_bengali.html')

@app.route('/block_tamil')
def block_tamil():
    return render_template('block_tamil.html')


if __name__ == "__main__":
    app.run(debug=True)