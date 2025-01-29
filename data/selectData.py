#Referred https://stackoverflow.com/questions/71764921/how-to-delete-an-element-in-a-json-file-python
#Referred https://www.boardinfinity.com/blog/json-file-in-python/#:~:text=JSON%20can%20also%20be%20written,file%20in%20the%20JSON%20format.

import json

filepath = 'data.json'
new_filepath = 'selectLots.json'

with open(filepath, 'r') as fp: 
    data = json.load(fp)

#Only focusing on the first 50 lots from original data file
selected_lots = data['carparks'][:50]
data['carparks'] = selected_lots

#Convert to JSON object
json_obj = json.dumps(data, indent = 4)

with open(new_filepath, 'w') as fp: 
    fp.write(json_obj)




