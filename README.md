# Markdown Links

## Descripción general de la librería.
Para dar un preambulo de para que sirve esta libreia, empecemos por una brebe descripción de un archivo .md o Markdown. [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Dado que en estos archivos se sulen icluir links de ejemplo, que con el paso del tiempo pueden llevar a sitios que ya no existen o que han cambiado su url, se pretende hacer esta libreria para ayudar a los desarrolladores a buscar entre los links, aquellas urls que aun estan activas y aquellas que ya devuelven un error al intentar acceder a ellas.

## Instrucciones de instalación

1.- Se debe acceder a este [link](https://github.com/MirEnovi/cdmx-2018-01-FE-markdown) en github.

2.- Se debe folkear al repositorio.

3.- Se debe clonar el repositorio en tu local.

4.- Se installan las dependencias que ya vienen indicadas es el package.json con npm install en la terminal.

5.- En terminal se pone el nombre de la libreria, más el nombre del archivo que queremos revisar:
    -md-links prueba.md
(Usamos prueba.md que ya viene cargado para hacer una prueba).

6.- Debe devolver un arreglo de links, con el texto que acompaña a dicho link, el path absoluto del archivo en donde fue encontrado y su estado (200 ok si aun esun link funcional).

### Versiones de la librería.
v2.2.2

