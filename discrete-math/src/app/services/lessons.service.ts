import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons: any = [ 
    {
      id: 1,
      title: 'Sistemas Numéricos',
      content: [
        {
          id: 1.1,
          subtitle: 'Sistema Decimal',
          text:   "El sistema decimal es el sistema de numeración posicional con base b=10, con 10 dígitos de notados por los símbolos:"+
                  "0, 1, 2, 3, 4, 5, 6, 7, 8, 9"+
                  "Los valores de la parte entera de un numero decimal son las potencias de diez, 100= 1 101=10 102=100 103=1000……."+
                  "Y la parte fraccionaria son la potencias negativas de diez 10-1=1/10 10-2=1/100 10-3=1/1000……."+
                  "Ejemplo:"+
                  "El número 483.125 se puede expresar como sigue:"+
                  "483.125=4*102 +8*101 +3*100 +1*10-1 +2*10-2 +5*10-3"+
                  "A esto se le llama notación expandida.",
        },
        {
          id: 1.2,
          subtitle: 'Sistema Binario',
          text:   "Es un sistema de numeración posicional con base igual a 2, esto, por tener dos números denotados: 0 y 1, que de forma abreviada se denominan bits."+
                  "Los valores de posición de la parte entera de un número binario son las potencias de dos, 20	21	22	23…. y la parte fraccionaria son la potencias negativas de dos, 2-1	2-2	2-3… "+
                  "Ejemplo:"+
                  "El número 1010.101 se puede expresar como así:"+
                  "1010.101=1*23+0*22+1*21+0*20+1*2-1+0*2-2+1*2-3"
        },
        {
          id: 1.3,
          subtitle: 'Sistema Octal',
          text:   "Este sistema numérico tiene como base al número 8, los números que le representan son: 0, 1, 2, 3, 4, 5, 6, y 7; y representa la serie de conjuntos derivados del sistema binario (correspondiente en potencia 3) y básicamente son equivalentes. El sistema octal se utiliza para la representación de los bits."+
                  "Los números octales pueden construirse a partir de números binarios agrupando cada tres dígitos consecutivos de estos últimos (de derecha a izquierda) y obteniendo su valor decimal. "+
                  "Por ejemplo, el número binario para 74 (en decimal) es 1001010 (en binario), lo agruparíamos como 1 001 010. De modo que el número decimal 74 en octal es 112. "+
                  "En informática, a veces se utiliza la numeración octal en vez de la hexadecimal. Tiene la ventaja de que no requiere utilizar otros símbolos diferentes de los dígitos."+
                  "Es posible que la numeración octal se usara en el pasado en lugar de la decimal, por ejemplo, para contar los espacios interdigitales o los dedos distintos de los pulgares. Esto explicaría por qué en latín nueve (novem) se parece tanto a nuevo (novus). Podría tener el significado de número nuevo."+
                  "La numeración octal es tan buena como la binaria y la hexadecimal para operar con fracciones, puesto que el único factor primo para sus bases es 2. "
        },
        {
          id: 1.4,
          subtitle: 'Sistema hexadecimal',
          text:   "Este sistema numérico tiene como base al número 16 y a la vez emplea números sustituidos por letras, siendo: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, y F. Su utilización, al igual que en el sistema octal, se efectúa sobre la codificación de bits."+
                  "El sistema hexadecimal un sistema de numeración vinculado a la informática, ya que los ordenadores interpretan los lenguajes de programación en bytes, que están compuestos de ocho dígitos. A medida de que los ordenadores y los programas aumentan su capacidad de procesamiento, funcionan con múltiplos de ocho, como 16 o 32. Por este motivo, el sistema hexadecimal, de 16 dígitos, es un estándar en la informática. "+
                  "Como nuestro sistema de numeración sólo dispone de diez dígitos, debemos incluir seis letras para completar el sistema. Estas letras y su valor en decimal son: A = 10, B = 11, C = 12, D = 13, E = 14 y F = 15. "+
                  "El sistema hexadecimal es posicional y por ello el valor numérico asociado a cada signo depende de su posición en el número, y es proporcional a las diferentes potencias de la base del sistema que en este caso es 16. "
        }       
      ]
    },
    {
      id: 2,
      title: 'Conversiones Numéricas',
      content: [
            {
                id: 2.1,
                subtitle: 'Conversión de decimal a binario',
                text:   "Para convertir de un decimal a binario, éste número se divide entre dos hasta que el cociente nos de cero; el residuo es el número binario, tomándolo de derecha a izquierda (en el sentido de la flecha)."+
                        " Ejemplo.-"+
                        "Convertir el número 7010 a binario."+               
                        " El resultado es: 10001102"+
                        " También podemos hacerlo de esta manera, en donde el último número es el primero, siguiendo la dirección de la flecha.",
                images: [
                    {
                        id: 1,
                        src: '../../assets/lessons/lesson2/img1.gif'
                    }
                ]
            },
            {
                id: 2.2,
                subtitle: 'Conversión de binario a decimal',
                text:   "Cada número binario ocupa una posición, siempre en potencia de dos, cuándo nosotros convertimos de decimal a binario dividimos entre dos, para convertir de binario a decimal multiplicamos, es decir:"+
                        "Trasformar 1101.1112 a su equivalente decimal \n Valores de posición 23 22 21 20 2-1 2-2 2 -3 \n Números binarios ",
                images: [
                    {
                        id: 2,
                        src: '../../assets/lessons/lesson2/img2.gif'
                    }
                ]        
            },
            {
                id: 2.3,
                subtitle: 'Conversión de decimal a octal',
                text: "Para convertir de decimal a octal se divide el número entre 8 hasta que el cociente sea cero, en donde el último residuo es el primer número y el primero es el último, por ejemplo: Por lo tanto 24510 = 3658",
                images: [
                    {
                        id: 3,
                        src: '../../assets/lessons/lesson2/img3.gif'
                    }
                ]
            },
            {
                id: 2.4,
                subtitle: 'Conversión de octal a binario',
                text: "El sistema octal ocupa tres posiciones, 4, 2, 1, sumados es igual a 7; si queremos convertir el 365 octal a binario.",
                images: [
                    {
                        id: 4,
                        src: '../../assets/lessons/lesson2/img4.gif',
                        description: "por lo tanto 3658= 111101012"
                    },
                    {
                        id: 5,
                        src: '../../assets/lessons/lesson2/img5.gif',
                        description: "Nota: Los ceros se omiten, los unos se suman."
                    }
                ]
            },
            {
                id: 2.5,
                subtitle: 'Conversión de binario a octal',
                text: "Para convertir un binario a octal de igual manera, se consideran las tres posiciones como se muestra en el siguiente ejemplo:",
                images: [
                    {
                        id: 6,
                        src: '../../assets/lessons/lesson2/img6.gif',
                        description: null
                    }
                ]
            },
            {
                id: 2.6,
                subtitle: 'Tabla de octales',
                text: "En esta tabla los números que están en el extremo izquierdo y derecho de color rojo son decimales, los demás números son octales, por ejemplo el 8 decimal que está al extremo superior izquierdo es equivalente al 10 octal; el quince decimal que se encuentra en el extremo superior derecho es equivalente al 17 octal.",
                images: null
            },
            {
                id: 2.7,
                subtitle: 'Conversión de decimal a hexadecimal',
                text: "El sistema hexadecimal va del 0 al 9 y del 10 al 15 se representan por medio de letras es decir que el 10 está representado por la A, el 11 por la B y así sucesivamente hasta llegar al 15. Para convertir de un número decimal a hexadecimal éste se divide entre 16. \n Por ejemplo:",
                images: [
                    {
                        id: 7,
                        src: '../../assets/lessons/lesson2/img7.gif',
                        description: "El 15 es igual a F entonces como en el caso de los binarios y los octales en los hexadecimales también los residuos de la división son el resultado, el último es el primero y el primero es el último quedando el resultado de la siguiente manera: \n 75910 = 2F716 \n 174310 = 6CF16 \n 3D816 = 98410"
                    },
                ]
            },
            {
                id: 2.8,
                subtitle: 'conversión de hexadecimal a binario',
                text: "Al hexadecimal le corresponden cuatro posiciones 8, 4, 2, 1, que sumados es igual a 15. Ejemplo: \n 79F16 = 011110011111",
                images: [
                    {
                        id: 8,
                        src: '../../assets/lessons/lesson2/img8.gif',
                        description: null
                    }
                ]
            },
            {
                id: 2.9,
                subtitle: 'conversión de binario a hexadecimal',
                text: "Ejemplo: 1010 1110 10112 = AEB16",
                images: null
            },
            {
                id: 2.10,
                subtitle: 'Tabla de hexadecimal',
                text: "Esta es una tabla única, es decir, que con ella se podrán hacer todas las operaciones aritméticas, sumas, restas, multiplicaciones y divisiones; en los extremos izquierdo y derecho se encuentran los decimales, por ejemplo el número 240 decimal es igual F0 hexadecimal, 241 decimal es igual F1 hexadecimal, el 255 decimal es igual FF hexadecimal, se colocan los decimales de esta manera para facilitar el recorrido de los números ya sea de izquierda a derecha o viceversa.",
                images: null
            } 
        ]
    },
    {
        id: 3,
        title: 'Operaciones básicas aritmáticas',
        content: [
            {
                id: 3.1,
                subtitle: 'Suma binaria',
                text: '0 + 0 = 0 \n 0 + 1 = 1 \n 1 + 0 = 1 \n 1 + 1 = 0 acarreo 1',
                images: null,
                example: null                
            },
            {
                id: 3.2,
                subtitle: 'Resta binaria',
                text: "El algoritmo de la resta en sistema binario es el mismo que en el sistema decimal. Pero conviene repasar la operación de restar en decimal para comprender la operación binaria, que es más sencilla. Los términos que intervienen en la resta se llaman minuendo, sustraendo y diferencia. \n Las restas básicas 0 - 0, 1 - 0 y 1 - 1 son evidentes:",
                images: null,
                example: "0 - 0 = 0 \n 1 - 0 = 1 \n 1 - 1 = 0 \n 0 - 1 = 1 (se transforma en 10 - 1 = 1) \n La resta 0 - 1 se resuelve, igual que en el sistema decimal, tomando una unidad prestada de la posición siguiente: 0 - 1 = 1 y me llevo 1, lo que equivale a decir en el sistema decimal, 2 - 1 = 1."
            },
            {
                id: 3.3,
                subtitle: 'Tabla para multiplicación',
                text: "0 - 0 = 0 \n 0 - 1 = 0 \n 1 - 0 = 0 \n 1 - 1 = 1",
                images: null,
                examples: null
            },
            {
                id: 3.4,
                subtitle: 'División binaria',
                text: "La división en binario es similar a la división en decimal, la única diferencia es que a la hora de hacer las restas, dentro de la división, estas deben ser realizadas en binario.",
                images: null,
                examples: null
            },
            {
                id: 3.5,
                subtitle: 'Complemento de la resta binaria',
                text: "Existen dos tipos de complementos, el complemento a la base – menos – uno y el complemento a la base. En el sistema decimal se llama respectivamente complementos a nueves y complementos a dieses y en el sistema binario se llama complementos a unos y complementos a doces respectivamente. Los complementos se pueden usar para reducir la resta a una adición.",
                images: null,
                examples: null
            },
            {
                id: 3.6,
                subtitle: 'Complemento decimales',
                text: "El complemento a nueves de un número decimal A se obtiene restando cada digito A de 9, y el complemento a dieses de A es su complemento a nueves mas uno.",
                images: null,
                examples: "Ejemplo: \n Dado A= 1408, su complemento a nueves es 8591 y el complemento a dieses es 8592, es decir: \n 9999-A=9999-1408=8591 \n (9999-1408) +1=8591+1=8592 \n Sean A y B dos enteros decimales con cuatro dígitos, suponiendo que A es menor que B, la diferencia Y = B-A se puede escribir como: \n Y=B-A+(9999+1-10000)=B+[(9999-A)+1]-10000"
            },
            {
                id: 3.7,
                subtitle: 'Complemento binario',
                text: "El complemento a unos de un número binario A se obtiene restando cada digito A de 1, y el complemento a doses de A es su complemento a unos más 1",
                images: null,
                examples: null
            },
            {
                id: 3.8,
                subtitle: 'Resta de octales',
                text: "Para restar octales usaremos la tabla 1. para el siguiente ejemplo, al pedir 1 al 4 éste queda convertido en 11 octal, , si se observa en la tabla el nueve decimal es igual a 11 octal, entonces 9 menos 5 es igual a 4 y llevamos 1 quedando el cuatro convertido en 13 su equivalente es 11, menos 6 es igual 5 y así sucesivamente hasta terminar.",
                images: null,
                examples: null
            },
            {
                id: 3.9,
                subtitle: 'Multiplicación de octales',
                text: "Recordemos que el sistema octal va del cero al 7, por lo tanto no puede existir un número ocho, tenemos que usar la tabla 1 para poder hacer la multiplicación y luego la suma. Dos por uno es dos, dos por tres es igual 6, estos dos primeros números no rebasan el sistema, pero 2 por 4 si, por consiguiente se busca su equivalente que es el 10, entonces es cero y llevamos 1, 2 por 6 es igual 12 más 1 que llevamos 13 su equivalente es 15 y así las dos cifras siguientes y proceder a hacer la suma.",
                images: null,
                examples: null
            },
            {
                id: 3.10,
                subtitle: 'Resta de hexadecimales',
                text: "El 13 hexadecimal es igual a 19 decimal, entonces 19 menos 13 (que es a lo que equivale D igual a 6 y llevamos 1, el 4 queda disminuido en una unidad, nuevamente 13 es igual a 19 menos 12 igual 7, el 8 menos 1, pasa a ser 17 hexadecimal que equivale a 23 menos 11 (B = 11) igual C que equivale a 12, el cinco queda convertido en 4 menos 2 igual a 2. ",
                images: null,
                examples: null
            }
        ]
    },
    {
        id: 4,
        title: 'Algoritmo de Booth \n (multiplicación binaria)',
        content: [
            {
                id: 4.1,
                subtitle: 'Algoritmos de booth - multiplicación binaria',
                text:   "El algoritmo de booth es un algoritmo que sirve para multiplicar (y dividir) números binarios con signo de manera rápida y sencilla en complemento a dos. Aqui explico de manera detallada el funcionamiento de ese algoritmo y muestro una implementación del mismo para micro controladores PIC."+
                        "La manera en que se representan los números binarios negativos es mediante su complemento a dos. El complemento a uno consiste en invertir el valor de cada bit, esto es que si se tiene el número 5 binario b'00000101′ su complemento a uno sería b'11111010′. Una vez teniendo el complemento a 1 para obtener el complemento a dos simplemente se le debe sumar un 1, asi que se tiene b'11111010 + 1′ de modo que el complemento a dos del número 5 binario es b'11111011′."+
                        "Ese es un dato muy importante ya que de ese modo se representan los números binarios negativos y el complemento a dos es parte del algoritmo de multiplicación de Booth. También es importante explicar que utilizando números de 8 bits el número mayor que se puede representar en complemento a dos es 127 y -127 que en binario son b'01111111′ y b'1000001′ respectivamente."+
                        "En ensamblador MPASM la manera de obtener el complemento a dos de un número es:"+
                        "\n comf NUM,f \n incf NUM,w \n movwf NUMC2 \n"+
                        "Donde NUM es el registro en el que se encuentra el número que se quiere pasar a complemento a dos y NUMC2 es el registro donde se guarda el complemento a dos del número. Hasta ahí todo bien, ahora pasemos al algorítmo. Supongamos que queremos multiplicar dos números de 8 bits, digamos que queremos multiplicar 5*(-6) donde 5 es el multiplicando y -6 es el multiplicador, con esos datos se forman 3 arreglos distintos de la siguiente manera:"+
                        "\n A=0000 0101 0000 0000 0 \n S=1111 1010 0000 0000 0 \n P=0000 0000 1111 1010 0 \n"+
                        "El byte superior de A está formado por el multiplicando, el siguiente byte se forma con ceros y se agrega un bit extra que también es 0. El byte superior de S está formado por el complemento a dos del multiplicando, el siguiente byte al igual que el caso anterior se forma con ceros y al final se agrega un bit extra que es 0."+
                        "El byte superior de P está formado por ceros, el siguiente byte es el valor del multiplicador y por último se tiene el bit extra."+
                        "Se puede observar que los tres números formados son de 17 bits cuando los números que se van a multiplicar son de 8 de modo que los números formados siempre serán de N+1 bits, siendo N el número de bits de los factores. Sigamos entonces. Este algoritmo consiste en comparar los últimos dos dígitos del número P y dependiendo del caso que sea realizar un suma o no realizar ninguna acción. Luego de evaluar cada caso se debe realizar un corrimiento a la derecha, manteniendo el valor del bit más significativo y desechando el valor del bit menos significativo. Los cuatro casos que se tienen se pueden ver en la siguiente tabla:"+
                        "\n 0 0 -> No realizar ninguna acción \n 0 1 -> P = P + A \n 1 0 -> P = P + S \n 1 1 -> No realizar ninguna acción\n"+
                        "Veamos el algoritmo paso a paso usando los números A, S y P de arriba. Primero tenemos el número P original: \n 0000 0000 1111 101[0 0] P \n Se comparan los últimos dos dígitos [0 0] con los cuatro casos posibles y se ve que no se debe realizar ninguna acción por lo que en la primer iteración simplemente se realiza un corrimiento a la derecha: \n 1.0000 0000 0111 110[1 0] ->"+
                        "Ahora los últimos dos dígitos [1 0] indican que se debe realizar la suma P=P+S y después el corrimiento a la derecha: \n 2.1111 1011 0111 110[1 0] P=P+S \n 1111 1101 1011 111[0 1] -> \n Después del corrimiento los últimos dos dígitos son [0 1] por lo que se debe realizar la suma P=P+A y después el corrimiento a la derecha:"+
                        "\n 3.0000 0010 1011 111[0 1] P=P+A \n 0000 0001 0101 111[1 0] -> \n Ahora los últimos dos dígitos son [1 0], se realiza la suma P=P+S y después el corrimiento a la derecha: \n 4.1111 1100 0101 111[1 0] P=P+S \n 1111 1110 0010 111[1 1] ->\n"+                        
                        "Los últimos dos dígitos [1 1] al igual que cuando fueron [0 0] indican que solo se debe realizar el corrimiento a la derecha: \n 5.1111 1111 0001 011[1 1] -> \n De nuevo se tiene [1 1] por lo que se realiza únicamente el corrimiento y en lo sucesivo se tendrá siempre el mismo caso: \n 6. 1111 1111 1000 101[1 1] -> \n 7. 1111 1111 1100 010[1 1] -> \n 8. 1111 1111 1110 0010 [1] ->\n"+
                        "Después de 8 iteraciones termina el algoritmo, se desecha el bit menos significativo (el bit extra) y se obtiene el producto de la multiplicación: \n 5*(-6) = 1111 1111 1110 0010 = -30 \n"+
                        "Cabe mencionar que el numero de iteraciones que realiza el algoritmo es igual N, que es el número de bits de los factores y el resultado final es igual a 2N, en este caso se multiplican factores de 8 bits por lo que el resultado final es de 16. Esta es la manera en la que funciona el algoritmo. Solamente hay que tener en cuenta que al realizar los corrimientos a la derecha se debe mantener siempre el bit más significativo, esto es que si se tiene '1101′ se realiza el corrimiento el resultado será '1110′ y no '0110′."
            },
            {
                id: 4.2,
                subtitle: 'Implementación del algoritmo de Booth en MPASM',
                text:     "Aplicando los pasos que acabo de explicar realicé una implementación del algoritmo de Booth para la multiplicación en MPASM para realizar multiplicaciones de números signados de 8 bits en micro controladores PIC 16F.\n"+
                          "El algoritmo implementado sigue los mismos pasos descritos, compara los últimos dos dígitos del factor P y realiza alguna de las acciones posibles para después llevar a cabo el corrimiento. Como mencione en un principio el algoritmo solo puede multiplicar números que van del -127 al 127 y el resultado lo da a través de los registros RESULTADOH: RESULTADOL.\n"+
                          "Para poder utilizar esta rutina (multibooth) se deben declarar los registros A1, A2, A3, S1, S2, S3, P1, P2, P3, MULTIPLICANDO, MULTIPLICADOR, RESULTADOH, RESULTADOL y CONT.\n"+
                          "En los registros RESULTADOH :RESULTADOL se muestra el valor positivo del resultado y si este fuera negativo se activa la bandera SIGNO (bit 0 del registro A3) para indicar que se trata de un numero negativo.\n"+
                          "Una vez explicado el algoritmo creo que no hay necesidad de explicar la implementación de la rutina aunque si así fuera siempre están los comentarios para exponer y aclarar las dudas."
            }
        ]
    }
  ]
 
  constructor() { }

  getLessons() {
    return this.lessons;
  }

  getLesson(id: number) {
    return this.lessons[id];
  }

}
