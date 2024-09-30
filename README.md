# 00-test-script.js
# from main directory with arguments
node src_node/script/00-test-script.js  aa bb 10


# 01-scan-xls.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
node src_node/script/01-scan-xls.js "../data" "KSSG_2024_SKK_db_r24200820.xlsx"


# 02-read-xls-sheet.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target sheet name
node src_node/script/02-read-xls-sheet.js "../data" "KSSG_2024_SKK_db_r24200820.xlsx" "Survey"


# 03-read-xls-sheet-WK.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target sheet name
# arg 5 : target column name
node src_node/script/03-read-xls-sheet-WK.js "../data" "KSSG_2024_SKK_db_r24200820.xlsx" "Survey" "WK"


# 04-read-xls-sheet-Holding.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target sheet name
# arg 5 : target column name
node src_node/script 04-read-xls-sheet-KKKS.js "../data" "KSSG_2024_SKK_db_r24200820.xlsx" "Survey" "HOLDING"


# 05-read-xls-sheet-KKKS.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target sheet name
# arg 5 : target column name
node src_node/script/05-read-xls-sheet-KKKS.js "../data" "KSSG_2024_SKK_db_r24200820.xlsx" "Survey" "KKKS"

# 06-read-xls-sheet-Project.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target sheet name
# arg 5 : target column name
node src_node/script/06-read-xls-sheet-Project.js "../data" "KSSG_2024_SKK_db_r24200820.xlsx" "Survey" "NAMA_KEGIATAN"

# 07-read-geojson-titik.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target column name
node src_node\script\07-read-geojson-titik.js "../data" "Geospatial_Titik_Survei_SKK_Migas_2024.geojson" "NAMA_KEGIATAN"

# 08-read-geojson-WK.js
# arg 0 : node
# arg 1 : script read js
# arg 2 : relative directory
# arg 3 : filename
# arg 4 : target column name
node src_node\script\08-read-geojson-WK.js "../data" "Geospatial_WK_Migas_Indonesia_Juni_2024.geojson" "WK"
