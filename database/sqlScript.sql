create table vouchers
(
    VoucherID   int auto_increment
        primary key,
    VoucherCode varchar(45) not null,
    IsUsed      bit         not null,
    ExpiredDate date        not null,
    constraint id_UNIQUE
        unique (VoucherID),
    constraint voucher_code_UNIQUE
        unique (VoucherCode)
);

create table addresses
(
    AdressID   int auto_increment
        primary key,
    Address    varchar(45) not null,
    City       varchar(45) not null,
    PostalCode varchar(45) null,
    Country    varchar(45) not null,
    VoucherID  int         null,
    constraint AdressID_UNIQUE
        unique (AdressID),
    constraint VoucherID
        foreign key (VoucherID) references vouchers (VoucherID)
            on delete set null
);

create index id_idx
    on addresses (VoucherID);

create
    definer = root@localhost procedure useVoucher(IN VoucherIdd int, IN Addresss varchar(45), IN Cityy varchar(45),
                                                  IN PostalCodee varchar(45), IN Countryy varchar(45))
begin
    update vouchers
    set IsUsed=1
    where VoucherID=VoucherIdd;
    insert into addresses(
                ADDRESS,
                CITY,
                POSTALCODE,
                COUNTRY,
                VOUCHERID
        ) values (
               Addresss,
                  Cityy,
                  PostalCodee,
                  Countryy,
                  VoucherIdd);
end;