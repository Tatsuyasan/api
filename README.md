# API Microservice

## API

### Installation

```bash
npm install
```

### Démarrage

```bash
npm start
```

## Docker

### Démarrer MongoDB

```bash
docker container run --name mongodb -p 27017:27017 -d mongo
```

### Lister tous les containers

```bash
docker container ps -a
```

### Manipuler le container mongoDB

#### Stopper le container

Permet de mettre en pause le container.

```bash
docker container stop mongodb
```

#### Démarrer le container

Démarre un container précédement stoppé.

```bash
docker container start mongodb
```

#### Supprimer le container

La suppression d'un container se fait après avoir été stoppé.

```bash
docker container rm mongodb
```

Ou en forçant la suppression sans stopper le container

```bash
docker container rm -f mongodb
```
