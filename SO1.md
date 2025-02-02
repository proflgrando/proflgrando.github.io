---
author: Prof. Leonardo Grando
title: Sistemas Operacionais
date:  2025
output: 
  revealjs::revealjs_presentation
---

<section> 
## Objetivo do curso

- Fundamentos de Sistemas Operacionais
- Estruturas de Computadores e Sistemas Operacionais
- Gerenciamento de Processos
- Escalonamento de Processador
- Sincronização de Processos Concorrentes
- Deadlocks
- Gerenciamento de Memória e Memória Virtual
</section>

<section>
## Conteúdo abordado

- Sistema de Arquivos
- Sistema de Entrada e Saída
- Armazenamento Secundário
- Estudo da Estrutura de Sistemas Operacionais Existentes
</section>

<section>
## Sistema Computacional

![Localização de um SO num sistema computacional](imagem/SO1/SO1.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.
</section>

<section>
## Interação com o Sistema

O programa pelo qual os usuários interagem pode ser via shell (TUI) ou interface gráfica (GUI).
</section> 

<section>
## Modos de Operação

- **Modo Núcleo**: O SO opera no modo núcleo, com acesso completo ao hardware.
- **Modo Usuário**: O modo usuário possui acesso restrito, geralmente sem permissão para executar instruções de E/S (entrada/saída).
</section> 

<section>
## O que é um Sistema Operacional?

Um sistema operacional é um conjunto de programas que gerenciam os recursos de um computador ou dispositivo eletrônico, facilitando a interação entre o hardware e os aplicativos ou o usuário. Ele atua como uma camada intermediária, coordenando a interação entre os diversos componentes do sistema.
</section>

<section>
## Principais funções do SO

1. **Gerenciamento de Processos**: Controla a execução de programas, gerenciando múltiplos processos e garantindo a utilização eficiente dos recursos.
2. **Gerenciamento de Memória**: Organiza a memória RAM e o armazenamento, alocando espaço para os programas em execução e otimizando o uso da memória.
</section>

<section>
3. **Gerenciamento de Dispositivos**: Controla a comunicação com dispositivos periféricos, como teclados, mouses e impressoras.
4. **Gerenciamento de Arquivos**: Organiza, armazena e controla o acesso a arquivos e pastas no sistema, garantindo a segurança e a fácil recuperação das informações.
</section>

<section>
5. **Interface com o Usuário**: Oferece uma interface gráfica ou de linha de comando, permitindo ao usuário interagir com o sistema e executar comandos.
  
*Exemplos de sistemas operacionais*: Windows, macOS, Linux, Android e iOS.
</section>

# História dos Computadores

- **1945-1955 (Geração 1)**: Válvulas, painéis de programação
- **1955-1965 (Geração 2)**: Transistores, sistemas em lote
- **1965-1980 (Geração 3)**: Circuitos integrados (CIs) e multiprogramação
- **1980-presente (Geração 4)**: Computadores pessoais
- **1990-presente (Geração 5)**: Computadores móveis

# Tipos de SOs

- SOs para computadores de grande porte
- SOs para servidores
- SOs para multiprocessadores
- SOs para computadores pessoais
- SOs de tempo real
- SOs embarcados
- SOs para cartões inteligentes

# Hardware

![Componentes de um computador pessoal](imagem/SO1/SO-12-29.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.
 
# Pipeline de Execução da CPU

![a) Pipeline de 3 estágios e b) CPU superescalar](imagem/SO1/SO-12-56.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Multithreading e Multicore

![a) Chip Quadcore e cache L2 compartilhada e b) L2 separadas](imagem/SO1/SO-10-25-20.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Hierarquia de Memória

![Hierarquia de memória](imagem/SO1/SO-24-43.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Entrada/Saída (E/S)

![a) Passos para iniciar um dispositivo E/S e b) Como a CPU é interrompida](imagem/SO1/SO-26-35.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Barramentos

![Estrutura de um sistema x86 grande](imagem/SO1/SO-27-04.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Processos

- **Processo**: É um programa em execução e possui um espaço de endereçamento próprio.

![Árvore de processos](imagem/SO1/SO-27-36.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Arquivos e Diretórios

- **Diretório**: Método de agrupamento hierárquico de arquivos.

- **Caminho**: Exemplo de caminho de arquivo: `~/Documentos/Git/PaginaWEB - ProfLgrando/proflgrando.github.io`

![Sistemas de arquivos](imagem/SO1/SO-27-59.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Montagem do Sistema de Arquivos no UNIX

- No UNIX, ocorre a montagem de sistemas de arquivos de dispositivos como DVDs e dispositivos USB.

![a) Antes da montagem, b) Após a montagem](imagem/SO1/SO-29-30.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Pipe

- Um **pipe** é um pseudoarquivo utilizado para conectar dois processos.

![Processos ligados por um pipe](imagem/SO1/SO-28-39.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Chamada de Sistema

![11 passos para fazer uma chamada ao sistema `read(fd, buffer, nbytes)`](imagem/SO1/SO-30-19.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Gerenciamento de Processos e Arquivos

![Gerenciamento de processos e de arquivos](imagem/SO1/SO-11-40-46.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Gerenciamento de Diretórios e Arquivos

![Gerenciamento do sistema de diretório e de arquivos](imagem/SO1/SO-11-40-59.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Segmentos de um Processo

- Cada processo é composto por três segmentos: **Texto**, **Dados** e **Pilha**.

![Segmentos de um processo](imagem/SO1/SO-11-40-59.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Chamadas de Gerenciamento de Diretórios

- **Antes e após a ligação** de diretórios no sistema.

![a) Antes da ligação, b) Após a ligação](imagem/SO1/SO-%2016-11-13.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Chamadas à API Win32

![Comparação interface API Win32](imagem/SO1/SO-16-11-49.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

# Estruturas de SO

1. **Sistemas Monolíticos**: O código do núcleo é implementado em um único bloco, sem separação clara entre as partes.
2. **Sistemas de Camadas**: O SO é organizado em camadas, cada uma responsável por uma função específica.
3. **Micronúcleos**: Núcleos mínimos que delegam a maior parte das funções a processos no espaço de usuário.
4. **Sistemas Clientes-Servidor**: Sistema dividido entre clientes que solicitam serviços e servidores que os fornecem.

5. **Máquinas Virtuais**: Permitem a execução de sistemas operacionais independentes sobre um único hardware físico.
6. **Exonúcleos**: A gestão de recursos é movida para o espaço de usuário, oferecendo maior modularidade e flexibilidade.

# Sistema Monolítico

![Estruturação simples](imagem/SO1/SO-30-49.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

**Explicação:** No sistema monolítico, todo o código do sistema operacional é combinado em um único bloco, o que pode dificultar a manutenção e atualização do sistema.

# Sistema de Camadas

![SO THE](imagem/SO1/SO-32-01.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

**Explicação:** No modelo em camadas, o sistema operacional é organizado de forma hierárquica, onde cada camada interage apenas com as camadas adjacentes, proporcionando maior modularidade.

# Micronúcleos

![Sistema MINIX](imagem/SO1/SO-32-16.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

**Explicação:** Os micronúcleos oferecem um núcleo minimalista e delegam muitas funções para processos no espaço de usuário, aumentando a flexibilidade e a segurança do sistema.

# Modelo Cliente-Servidor

![Sistema MINIX](imagem/SO1/SO-32-32.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

**Explicação:** O modelo cliente-servidor divide o sistema em partes que solicitam e fornecem serviços, promovendo a comunicação e a distribuição de recursos de forma eficiente.

# Máquinas Virtuais

![VM/#&) com CMS](imagem/SO1/SO-33-01.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

**Explicação:** As máquinas virtuais permitem que múltiplos sistemas operacionais rodem sobre um único hardware físico, isolando-os uns dos outros para garantir segurança e independência.

# Máquinas Virtuais (cont.)

![VM/370 com CMS](imagem/SO1/SO17-12-22.png)

![VMs redescoberto com Hypervisor](imagem/SO1/SO-33-01.png)

Fonte: TANENBAUM, Andrew S. *Sistemas operacionais modernos*.

**Explicação:** O conceito de máquinas virtuais foi expandido com o uso de hypervisores, que permitem a criação e o gerenciamento de diversas máquinas virtuais em um único sistema físico.
