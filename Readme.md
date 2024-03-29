# Модуль для решения квадратных уравнений
## Как работает модуль

Для того чтобы рассчитать квадратное уравнение, необходимо:
1. Cоздать экземпляр класса Equation с указанием коэффициентов `a`, `b` и `c`.
2. Вызвать метод класса rootSearch();
>Метод возвращает массив значений корней или же строку если корней нет.
3. Если необходимо узнать дискриминант квадратного уравнения, воспользуйтесь методом класса getDisc().

## Основные понятия
>**Квадратное уравнение** - это уравнение вида ax2 + bx + c = 0,  
где:   
a – коэффициент перед x2,   
b – коэффициент перед x, 
c – свободное число.

### Нахождение Дискриминанта
Существуют разные способы нахождения корней квадратного уравнения. Cамый основной и распространенный способ – через вычисление дискриминанта.   
В этом случае он рассчитывается по формуле:   
**D = b2 – 4ac**

Если второй коэффициент уравнения четный, можно решать уравнение через k, тогда будет другая формула дискриминанта:   
**D1 = k2 – ac** ,  
где:  
**k = b/2** 

Если первый коэффициент уравнения равен 1, то можно воспользоваться теоремой Виета, которая имеет 2 условия:    
**x1 +x2 = −b**   
**x1 ⋅ x2 = c**

### Нахождение корней уравнения

>Если D > 0 - уравнение имеет 2 корня:  
**x1 = (-b + D^0.5)/2*a**  
**x2 = (-b - D^0.5)/2*a**  
или если решали через `k`:  
**x1 = (-b/2 + D^0.5)/a**  
**x2 = (-b/2 - D^0.5)/a**

>Если D = 0 - уравнение имеет 1 корень:   
**x = −b/2*a**   
или если решали через `k`:  
**x=(−b/2)/a**

>Если D <> 0 - уравнение не имеет корней.
