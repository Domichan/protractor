select * from protr_train.books;
select * from protr_train.booktypes;
select * from protr_train.users;

insert into protr_train.users values (1, 'Ala', 'Nowak','Teacher','22');
insert into protr_train.users values (2, 'Kasia', 'Kowalska','Doctor','23');
insert into protr_train.users values (3, 'Tomi', 'Lwowski','Sale Person','34');
insert into protr_train.users values (4, 'Natka', 'Pawlowska','Lawyer','55');
insert into protr_train.users values (5, 'Aga', 'Trwkowska','Nurse', '23');

insert into protr_train.booktypes values (1, 'fantasy');
insert into protr_train.booktypes values (2, 'biographical');
insert into protr_train.booktypes values (3, 'psychological');
insert into protr_train.booktypes values (4, 'detective');
insert into protr_train.booktypes values (5, 'romance');
insert into protr_train.booktypes values (6, 'horror');
insert into protr_train.booktypes values (7, 'science fiction');
insert into protr_train.booktypes values (8, 'biography');
insert into protr_train.booktypes values (9, 'thriller');
insert into protr_train.booktypes values (10, 'historical');
insert into protr_train.booktypes values (11, 'short story');
insert into protr_train.booktypes values (12, 'fairy tale');
insert into protr_train.booktypes values (13, 'comic');


insert into protr_train.books values (1, 'The Black Magician', 1,'D0001', 'Trudi', 'Canavan');
insert into protr_train.books values (2, 'Memoirs of a Geisha', 2, 'D0002', 'Arthur', 'Golden');
insert into protr_train.books values (3, 'Age of the Five', 1, 'D0003', 'Trudi', 'Canavan');
insert into protr_train.books values (4, 'The Witcher', 1, 'D0004', 'Andrzej', 'Sapkowski');
insert into protr_train.books values (5, 'Divergent', 3, 'D0005', 'Veronica', 'Roth');
insert into protr_train.books values (6, 'Dance over The Edge', 1,'D0006', 'Elena', 'Malinowska');
insert into protr_train.books values (7, 'A Wild Light', 1, 'D0007', 'Marjorie', 'Liu');