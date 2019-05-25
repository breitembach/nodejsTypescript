## NODEJS TYPESCRIPT

Project base Nodejs with Typescript;

Using Sucrase for build more fast
```
             Time      Speed
Sucrase      2.928s    225752 lines per second
swc          13.782s   47966 lines per second
TypeScript   39.603s   16693 lines per second
Babel        52.598s   12569 lines per second
```

### USAGE
`> npm install -g typescript`

`> npm install -g eslint`

`> npm install`

### DEVELOPMENT
`> npm run dev`
##### OPCIONAL
`install docker and docker compose for RUN`

### PRODUCTION
`> npm run build`

`> node src/server.js`

### USING DOCKER
`> docker-compose up`




### USE VSCODE?
* install plugin `eslint`

##### vscode settings
```
{
"eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        {"language": "typescript", "autoFix": true},
    ]
}

```

