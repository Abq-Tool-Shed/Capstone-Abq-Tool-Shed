drop table if exists rating;
drop table if exists borrow;
drop table if exists category;
drop table if exists tool;
drop table if exists profile;



create table profile(
    profileId binary(16) not null,
    profileActivationToken char(32),
    profileHandle varchar(32) not null,
    profileName varchar(32) not null,
    profilePhoneNumber varchar(32) not null,
    profileEmail varchar(128) not null,
    profileProfileImage varchar(255),
--     is blob correct datatype?
    profileProfileHash char(97) not null,
    unique(profileHandle),
    unique(profileEmail),
    primary key(profileId)
);

create table tool(
    toolId binary(16) not null,
    toolProfileId binary(16) not null,
    toolImage varchar(255),
    toolName varchar(32) not null,
    toolPostDate datetime(6) not null,
    toolLat float(6),
    toolLong float(6),
    toolDescription varchar(500) not null,
    toolLendRules varchar(500) not null,
    index(toolProfileId),
    foreign key(toolProfileId) references profile(profileId),
    primary key(toolId)
);

create table category
(
    categoryId     binary(16)   not null,
    categoryToolId binary(16)   not null,
    category       varchar(255) not null,
    index (categoryToolId),
    primary key (categoryId),
    foreign key (categoryToolId) references tool(toolId)
);

create table borrow
(
    borrowId binary(16) not null,
    borrowProfileId binary(16) not null,
    borrowToolId binary(16) not null,
    borrowDateTime datetime(6) not null,
    borrowReturnedDateTime datetime(6) not null,
    borrowCompleted varchar(20) not null,
    index(borrowToolId), index(borrowProfileId),
    foreign key (borrowProfileId) references profile(profileId),
    foreign key(borrowToolId) references tool(toolId),
    primary key (borrowId)
);

create table rating (
    ratingBorrowerProfileId binary(16) not null ,
    ratingLenderProfileId binary(16) not null ,
    ratingProfileId binary(16) not null,
    rating varchar(500) not null,
    index(ratingBorrowerProfileId), index(ratingLenderProfileId), index (ratingProfileId),
    foreign key (ratingProfileId) references profile(profileId),
    foreign key (ratingBorrowerProfileId) references borrow(borrowProfileId),
    foreign key (ratingLenderProfileId) references profile(profileId),
    primary key (rating)
)