create database db_learnez;
use db_learnez;

create table cadastro(
	id int primary key auto_increment,
    email varchar(255),
    senha varchar(20),
    created_at timestamp
);

create table post(
	id int not null auto_increment primary key,
    mensagem varchar(500),
    titulo varchar(50),
    file varchar(120),
    created_at timestamp default current_timestamp
);

select * from cadastro;
select * from post;