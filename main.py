import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
def checkStudent(id):
    studentId = id.args.get('studentId')
    studentId = id

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    

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
    return (results)

