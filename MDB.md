---
author: Prof. Leonardo Grando
title: Modelagem de banco de dados
date:  2025
output: 
  revealjs::revealjs_presentation
---

# Onde ficam os dados de um produto em uma empresa?

Imagine o caso de uma empresa com três departamentos distintos e com bancos de dados separados, em sistemas isolados:

![Dados não compartilhados](imagem/MBD/001.png)

Ocorre redundância de dados.

**Fonte:** Adaptado de HEUSER, Carlos Alberto. *Projetos de banco de dados*. 6.ed. Porto Alegre, RS: Bookman, 2009.

# Tipos de redundancia de dados:

- redundância controlada: controlada por software
- redundância não controlada: controlada pelo usuário (inconsistência de  dados e repetição da entrada da mesma informação). 

Como evitar a redundância não controlada?

# Banco de dados:

Conjunto de arquivos integrados que atendem a um conjunto de sistemas (HEUSER, 2009)

![Banco de dados](imagem/MBD/002.png)

**Fonte:** Adaptado de HEUSER, Carlos Alberto. *Projetos de banco de dados*. 6.ed. Porto Alegre, RS: Bookman, 2009.


# O que acontece quando se utiliza um banco de dados?

- A estrutura dos arquivos se tornam mais complexas;
- Devem atender às necessidades de diferentes sistemas.

Solução: Utilizar um Sistema de Gerência de Banco de Dados (SGBD)

SGBD: software que incorpora as funções de definição, recuperação, e alteração de dados em um banco de dados. (HEUSER, 2009)

# Modelo de dados

Definição formal da estrutura de um banco de dados.

É o objetivo de nossa disciplina

Como são armazenado as informações sobre os produtos e suas caracteristicas e não quais produtos estão armazenados no BD.

Podem ser apresentados de várias formas (texto, diagrama...). 

Esquema de banco de dados: forma de apresentação de um modelo de dados.

# Niveis de modelos de banco de dados

![Banco de dados](imagem/MBD/003.png)

**Fonte:** Adaptado de HEUSER, Carlos Alberto. *Projetos de banco de dados*. 6.ed. Porto Alegre, RS: Bookman, 2009.


# Modelo conceitual

Como a estrutura de dados pode aparecer no BD. Não apresenta como os dados estão armazenados no SGBD (independem do tipo de SGBD)

- Abordagem entidade-relacionamento (ER) - Técnica de modelagem conceitual
- Diagrama entidade-relacionamento (DER) - esquema diagramático.




# Referência Bibliográfica

**HEUSER, Carlos Alberto.** *Projetos de banco de dados*. 6.ed. Porto Alegre, RS: Bookman, 2009. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=844036.