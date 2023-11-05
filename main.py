import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

def checkStudent(id):
    studentId = id.args.get('studentId')
    
    conn = mysql.connector.connect(host='34.71.92.26',
                                    user='root',
                                    database='Degrees')
    
    cursor = conn.cursor()
    
    cursor.callproc('checkStudent', (studentId,))

    # Get the results of the stored procedure.
    c_results = cursor.stored_results()
    for c_result in c_results:
        results = c_result.fetchall()
    # Close the cursor and connection.
    cursor.close()
    conn.close()

    response = jsonify(results)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response



def addDegree(Ids):
    sId = Ids.args.get('sId')
    dId = Ids.args.get('dId')
    cId = Ids.args.get('cId')
    
    conn = mysql.connector.connect(host='34.71.92.26',
                                    user='root',
                                    database='Degrees')
    
    cursor = conn.cursor()
    
    cursor.callproc('addDegree', (sId, dId, cId,))

    # Close the cursor and connection.
    conn.commit()
    cursor.close()
    conn.close()

    response = jsonify("success")
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response




def deleteDegree(id):
    Id = id.args.get('Id')
    
    conn = mysql.connector.connect(host='34.71.92.26',
                                    user='root',
                                    database='Degrees')
    
    cursor = conn.cursor()
    
    cursor.callproc('deleteDegree', (Id,))

    # Close the cursor and connection.
    conn.commit()
    cursor.close()
    conn.close()

    response = jsonify("success")
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response

