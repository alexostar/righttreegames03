## Deployment on righttree.alexostar.com

Add " output: 'standalone'," to next.config.ts

Deploying righttree:v01 2024-11-14 - First version
Deploying righttree:v02 2024-12-07 - Maps included
righttree:v03 2024-12-07 - Authentication added and some styling changes
NEW APP
righttree:v05 2025-01-10 - New app!!

```bash


docker build . --platform linux/amd64  -t ghcr.io/alexostar/righttree:v05
docker login ghcr.io
docker push ghcr.io/alexostar/righttree:v05
```

Stop the existing container

Then as root on ssh to the Hostinger VPS
ssh root@145......

```bash
docker login ghcr.io
docker run -p 3600:3000 -d ghcr.io/alexostar/righttree:v05

```

TO BE ADDED
: Connect the new contaer to the correct docker network

Stop the container in the terminal and then use portainer to change the restart policy of the container (to "Unless stopped")

3600 is for the carbongames.natturuvinir.is site
3900 is for the kolefnisvaktin.natturuvinir.is site
Earlier 3500:3000 for the vefsja.natturuvinir.is site
