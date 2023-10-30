def checkStudent(id):
    studentId = request.args.get('studentId')
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    if request.method == 'OPTIONS':
            return ('', 204, headers)

    conn = mysql.connector.connect(host='34.71.92.26',
                                    user='root',
                                    database='degrees')
    
    cursor = conn.cursor()
    
    cursor.callproc('checkStudent', (studentId,))

    # Get the results of the stored procedure.
    c_results = cursor.stored_results()
    for c_result in c_results:
        results = c_result.fetchall()
    # Close the cursor and connection.
    cursor.close()
    conn.close()
    return (results, 200, headers)
    ﻿
