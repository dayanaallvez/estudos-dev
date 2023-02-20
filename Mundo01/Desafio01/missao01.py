# Procedimento 01

numero_base_decimal = 23
numero_base_binaria = "{0:b}".format(numero_base_decimal)
print(f'Número na base decimal: {numero_base_decimal}')
print(f'Conversão para base binária: {numero_base_binaria}')

# Procedimento 02

num_entrada = int(input('Digite um número inteiro decimal: '))
salva_num_entrada = num_entrada
binario = ''
while num_entrada > 0:
    if (num_entrada % 2) == 0:
        binario = '0' + binario
    elif (num_entrada % 2) == 1:
        binario = '1' + binario
    num_entrada = num_entrada // 2
print(f'O número {salva_num_entrada}, corresponde a {binario} na base binária!')