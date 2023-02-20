import numpy as np
from faker import Faker
import matplotlib.pyplot as plt
from num2words import num2words
from wordcloud import WordCloud

# Gerando dados
fake = Faker('pt_BR')
pontos = np.random.randint(1, 11, 100)

nums = []
list_nums = []

# Salvando dados no arquivo texto
with open('dados.txt', 'w') as arquivo:
    for n in pontos:
        arquivo.write(f'{fake.name()}, {n}\n')

# Manipulando dados
with open('dados.txt', 'r') as arquivo:
    for linha in arquivo:
        lin = linha.replace('\n', '').split(',')
        nums.append(int(lin[1]))
        list_nums.append(num2words(int(lin[1]), lang='pt_BR'))

ext_nums = ' '.join(list_nums)

# Gerando o Gráfico
def grafico(lista):
    plt.title('Histograma de Pontuações', fontsize=15)
    plt.xlabel('Pontuações', fontsize=10)
    plt.ylabel('Probabilidade', fontsize=10)
    plt.hist(lista, bins=10, density=True, color='b', alpha=0.7)
    plt.grid()
    plt.show()
  
grafico(nums)

# Nuvem de palavras
def nuvem(var):
    wc = WordCloud(min_font_size=10, max_font_size=400, 
                   background_color='black', mode="RGB", width=600, height=300,
                   normalize_plurals=True).generate(var)
    plt.figure(figsize=(10, 10))
    plt.imshow(wc, interpolation="bilinear")
    plt.axis("off")
    plt.show()

nuvem(ext_nums)