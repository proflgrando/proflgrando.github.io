---
author: Prof. Leonardo Grando
title: Sistemas Operacionais
date:  2025
output: 
  revealjs::revealjs_presentation
---

<section> Objetivo do curso:

Fundamentos de Sistemas Operacionais; 

Estruturas de Computadores e de Sistemas Operacionais; 

Gerenciamento de Processos; Escalonamento de Processador; Sincronização de Processos Concorrentes; Deadlocks; 

Gerenciamento de Memória; Memória Virtual; 
</section>
<section>

Sistema de Arquivos; Sistema de Entrada e Saída; Armazenamento Secundário; 

Estudo da Estrutura de Sistemas Operacionais Existentes.

</section>

<section>
Sistema Computacional:

![Localização de um SO num sistema computacional](imagem/SO1/SO1.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

</section>

<section>

O programa pelo qual os usuários interagem pode ser pelo shell (TUI) ou interface gráfica (GUI)

 </section> 

 <section>

Os tipos de softwares podem ser o modo núcleo e modo usuário. SO opera no modo núcleo (supervisor) - Possui acesso a todo hardware.

Modo usuário possui apenas um pequeno conjunto das intruções da máquina. Geralmente não podem executar instruções de E/S (entrada/saida)
 </section> 

<section>
  O que é um sistema operacional?
  
  Conjunto de programas que gerenciam (gerenciador de recursos) os recursos de um computador ou dispositivo eletrônico e facilitam a interação (máquina extendida) entre o hardware e os aplicativos ou o usuário. Ele funciona como uma camada intermediária entre o usuário e o hardware, garantindo que os diferentes componentes do sistema trabalhem de forma coordenada.
</section>

<section>
  <section>
    **Principais funções**
  </section>
  
  <section>
    **Gerenciamento de processos:** Controla a execução de programas, gerenciando múltiplos processos e garantindo que eles utilizem os recursos de forma eficiente.
    
    **Gerenciamento de memória:** Organiza a memória RAM e a memória de armazenamento, alocando espaço para programas em execução e otimizando o uso da memória.
  </section>
</section>
<section>
   **Gerenciamento de dispositivos:** Controla a comunicação com dispositivos periféricos, como teclados, mouses, impressoras e outros componentes externos.
   
    **Gerenciamento de arquivos:** Organiza, armazena e controla o acesso a arquivos e pastas no sistema, garantindo que as informações sejam facilmente acessíveis e seguras.
    
    
</section>
  
<section>
   **Interface com o usuário:** Fornece uma interface gráfica ou de linha de comando para que o usuário interaja com o sistema, executando comandos e acessando recursos.
   
    *Exemplos de sistemas operacionais* incluem Windows, macOS, Linux, Android, e iOS. 
</section>

# Historia dos computadores
* 1945-1955: Geração 1: Válvulas, painéis de programação
* 1955-1955: Geração 2: transistores, sistemas em lote
* 1965-1980: Geração 3: CIs e multiprogramação
* 1980-presente: Geração 4: computadores pessoais
* 1990-presente: Geração 5: computadores móveis

# Tipos de SOs
* SOs para computadores de grande porte
* SOs de Servidores
* SOs de multiprocessadores
* SOs de computadores pessoais
* SOs de tempo real
* SOs embarcado
* SOs de cartões inteligentes

# Hardware:

![Componentes de um computador pessoal](imagem/SO1/SO-12-29.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.


# Pipeline execução CPU:

![a)pipeline de 3 estágios e b) CPU superescalar](imagem/SO1/SO-12-56.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Multithreadng e Multicore:

![a)Chip Quadcore e cache L2 compartilhada e b) L2 separadas](imagem/SO1/SO-10-25-20.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Memória:

![Hierarquia de memória](imagem/SO1/SO-24-43.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# E/S:

![a)Passos para iniciar um dispositivo E/S e b) Como CPU é interrompida](imagem/SO1/SO-26-35.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Barramentos:

![Estrutura de um sistema x86 grande](imagem/SO1/SO-27-04.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Processos:

Processos é um programa em execução

Associado a cada processo existe um espaço de endereçamento

![Árvore de processos](imagem/SO1/SO-27-36.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.


# Arquivos:

Diretório: maneira de agrupar os arquivos (hierarquia)

Nome do caminho: ~/Documentos/Git/PaginaWEB - ProfLgrando/proflgrando.github.io

![Sistemas de arquivos](imagem/SO1/SO-27-59.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# 

No UNIX ocorre a montagem do sistema de arquivos (DVDs, memória de dispositivos USB etc)

![a) antes da montagem, b) após a montagem](imagem/SO1/SO-29-30.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Pipe:

Pseudoarquivo que pode ser usado para conectar dois processos.

![Processos ligados por um pipe](imagem/SO1/SO-28-39.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.


# Chamada de Sistema:

![11 passos para fazer uma chamada ao sistema read(fd, buffer, nbytes)](imagem/SO1/SO-30-19.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# 

![Gerenciamento de processos e de arquivos](imagem/SO1/SO-11-40-46.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# 

![Gerenciamento do sistema de diretório e de arquivos e diversos](imagem/SO1/SO-11-40-59.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Segmentos de um processo:

![Cada processo possui três segmentos: texto, dados e pilha](imagem/SO1/SO-11-40-59.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

#

![Cada processo possui três segmentos: texto, dados e pilha](imagem/SO1/SO-16-10-24.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Chamadas gerenciamento de diretórios:

![a) antes da ligação de /usr/jim/memo ao diretório ast. b) após esta ligação](imagem/SO1/SO-%2016-11-13.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Chamadas ao API Win32:

![Comparação interface API Win32](imagem/SO1/SO-16-11-49.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Estruturas de SO

1. **Sistemas monolíticos**: São sistemas operacionais em que todo o código do núcleo é implementado em um único bloco, sem separação clara entre suas partes.
  
2. **Sistemas de camadas**: O sistema operacional é organizado em camadas hierárquicas, onde cada camada executa uma função específica e interage apenas com a camada imediatamente superior ou inferior.

3. **Micronúcleos**: São sistemas operacionais com núcleos mínimos, que oferecem apenas os serviços essenciais, delegando outras funções a processos de espaço de usuário.

#

4. **Sistemas clientes-servidor**: Estrutura onde o sistema é dividido em clientes que solicitam serviços e servidores que os fornecem, frequentemente em uma rede distribuída.

5. **Máquinas virtuais**: Permitem a execução de vários sistemas operacionais independentes, chamados de "máquinas virtuais", sobre um único hardware físico, isolando recursos e processos.

6. **Exonúcleos**: Em vez de centralizar todos os serviços no núcleo, os exonúcleos movem grande parte da gestão para o espaço de usuário, promovendo maior flexibilidade e modularidade.

# Sistema Monolitico:

![Estruturação simple](imagem/SO1/SO-30-49.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Sistema de Camadas:

![SO THE](imagem/SO1/SO-32-01.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Micronúcleos:

![Sistema MINIX](imagem/SO1/SO-32-16.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Modelo Cliente-servidor:

![Sistema MINIX](imagem/SO1/SO-32-32.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Máquinas Virtuais:

![VM/#&) com CMS](imagem/SO1/SO-33-01.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.

# Máquinas Virtuais:

![VM/370 com CMS](imagem/SO1/SO17-12-22.png)

![VMs redescoberto com Hypervisor](imagem/SO1/SO-33-01.png)

Fonte imagem: TANENBAUM, Andrew S. Sistemas operacionais modernos.
