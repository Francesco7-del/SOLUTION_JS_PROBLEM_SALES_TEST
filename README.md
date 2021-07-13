# SOLUTION_JS_PROBLEM_SALES_TEST

#TRACCIA

Sales taxes problem

This problem requires some kind of input. You are free to implement any mechanism for
feeding input into your solution (for example, using hard coded data within a unit test). You
should provide sufficient evidence that your solution is complete by, as a minimum, indicating
that it works correctly against the supplied test data.

PROBLEM: SALES TAXES
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and
medical products that are exempt. Import duty is an additional sales tax applicable on all
imported goods at a rate of 5%, with no exemptions.
When I purchase items I receive a receipt which lists the name of all the items and their price
(including tax), finishing with the total cost of the items, and the total amounts of sales taxes
paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains
(np/100 rounded up to the nearest 0.05) amount of sales tax.
Write an application that prints out the receipt details for these shopping baskets...

INPUT
Input 1:
2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
Input 2:
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50
Input 3:
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
3 box of imported chocolates at 11.25
OUTPUT
Output 1:
2 book: 24.98
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50

Total: 42.32
Output 2:
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15
Output 3:
1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
3 imported box of chocolates: 35.55
Sales Taxes: 7.90
Total: 98.38


 ############################################################
  
  
  
  #DESCRIZIONE 
  il codice presenta la soluzione del problema dato. Per l'implementazione è stato utilizzato interamente Javascrpt.   
  Dato un input(nel file index.js) il codice produrrà un opportuno output applicando la giusta tassa , controllando 
  il prodotto in ingresso.

#REQUISITI
  Node.js
  avere a disposizione un IDE(esempio Atom)  .
  Suggerimento : se si utilizza Atom installare il pacchetto platformio-ide-terminal
  

#Utilizzo
  Scaricare il file .zip contenente il codice per risolvere il problema.
  Scaricare e installare Node.js(se non presente sul PC):link-->
  Aprire l'IDE : 
  
  aprendo il file index.js si possono vedere i campi di input(attualmente presenti gli input  forniti della traccia)si possono modificare per eseguire più   test.
  La cartella src contiene gli script con  funzioni come: definire il tipo prodotto,definire la tassa da applicare.
  La cartella  test contiene alcuni esempi di test e relative risposte. 


