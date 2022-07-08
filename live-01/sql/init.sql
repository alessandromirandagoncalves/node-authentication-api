create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

create table if not exists application_user(
    uuid uuid default uuid_generate_v4(),
    username varchar not null,
    password varchar not null,
    primary key(uuid)
)


insert into application_user
(username,password)
values
('admin', crypt('123123','Tqk*76H028JuW'));