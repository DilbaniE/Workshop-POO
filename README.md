# Proyecto de Programación Orientada a Objetos

Este proyecto es un ejercicio práctico de Programación Orientada a Objetos (POO) que implementa un sistema de gestión de personas, empleados, vehículos y empresas.

## Estructura del Proyecto

El proyecto está compuesto por varias clases e interfaces que modelan diferentes entidades y sus relaciones. A continuación se muestra un diagrama UML que representa la estructura general del proyecto:
![image](https://github.com/user-attachments/assets/6cfcae2d-9933-4686-af89-cc1544aa908c)


## Clases Principales

1. **Persona**: Clase base con propiedades como nombre, edad y dirección.
2. **Empleado**: Hereda de Persona, añadiendo salario y métodos específicos.
3. **Vehiculo**: Clase abstracta con subclases Coche y Moto.
4. **Empresa**: Gestiona una lista de empleados.
5. **Proyecto**: Permite asignar empleados a proyectos.
6. **Departamento**: Agrupa empleados en departamentos.

## Características Implementadas

- Herencia y polimorfismo (Persona -> Empleado)
- Encapsulación (propiedad edad privada en Persona)
- Interfaces (Direccion)
- Clases abstractas (Vehiculo)
- Enumeraciones (EstadoCivil)
- Relaciones muchos a muchos (Empleado-Proyecto)
- Manejo de colecciones (lista de empleados en Empresa y Departamento)

## Cómo Usar

1. Clone el repositorio
2. Navegue a la carpeta del proyecto
3. Ejecute el archivo index para ver ejemplos de uso de las clases

## Estructura de Commits

Cada ejercicio ha sido commiteado individualmente con el mensaje "Ejercicio nro xx" para facilitar el seguimiento del progreso.




