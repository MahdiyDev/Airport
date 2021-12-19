create database airport;

create extension if not exists "uuid-ossp";

create table planes(
    plane_uid UUID not null primary key default uuid_generate_v4(),
    plane_name text not null,
    plane_max_speed BIGINT not null,
    plane_capacity BIGINT not null
);

create table addresses(
    address_uid UUID not null primary key default uuid_generate_v4(),
    address_name text not null,
    address_distance BIGINT not null,
    address_ref_plane UUID default null,
    foreign key(address_ref_plane)
        references planes(plane_uid)
            on delete cascade
);

create table passengers(
    passenger_uid UUID not null primary key default uuid_generate_v4(),
    passenger_fullname text not null,
    passenger_phone_number BIGINT not null
);

create table tickets(
    ticket_uid UUID not null primary key default uuid_generate_v4(),
    ticket_ref_passenger UUID default null,
    ticket_ref_address UUID default null,
    foreign key(ticket_ref_passenger)
        references passengers(passenger_uid)
            on delete cascade,
    foreign key(ticket_ref_address)
        references addresses(address_uid)
            on delete cascade
);
