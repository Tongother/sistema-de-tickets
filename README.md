<h1>Procedimieto para hacer un merge request</h1>

1. Primero tienen que asegurarse que la rama master este actualizada, para ello tienen que hacer un ```git checkout master``` y una vez que esten dentro de la rama realizar un ```git pull origin master```.

2. Recordar que una vez que empiezan a realizar un nuevo trabajo tienen que crear su propia rama, para ello deben de estar colocados en la rama master y poner ```git branch <nombre de la rama>```.

3. Una vez que hayan terminado su trabajo en su rama, hacen un ``` git add . ``` y un ``` git commit -m "Breve descripción de lo que hicierón"```.

4. Una vez hecho esto, hacen un ``` git checkout master ```, cuando esten posicionados en master, hacen un ``` git merge suRama ```, resuelven los conflictos y se aseguran con un ``` git status ```.

5. Vuelven a confirmar que no haya cambios en la rama con ``` git pull origin master ```, una vez esto, se regresan a su rama con ``` git checkout suRama ```.

6. Finalmente, en su rama hacen un ``` git push origin <nombre de su rama>```.

7. Esperan a que sean aceptados sus cambios.
