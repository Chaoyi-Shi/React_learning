import pandas as pd

# 使用适当的参数来逐块读取大型CSV文件
chunk_size = 100000  # 每次读取的行数
column_to_delete1 = 'delta'  # 要删除的列名
column_to_delete2 = 'delta2'  # 要删除的列名

chunks = pd.read_csv('csvfile/continental.csv', chunksize=chunk_size)

# 创建一个新文件来存储结果
with open('new_continental.csv', 'w') as output_file:
    for chunk in chunks:
        # 删除列
        chunk = chunk.drop(columns=[column_to_delete1])
        chunk = chunk.drop(columns=[column_to_delete2])

        # 将处理后的数据写入新文件
        chunk.to_csv(output_file, header=False, index=False, mode='a')