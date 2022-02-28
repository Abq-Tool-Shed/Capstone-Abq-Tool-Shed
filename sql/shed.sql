drop table if exists rating;
drop table if exists borrow;
drop table if exists tool;
drop table if exists category;
drop table if exists profile;



create table profile(
    profileId binary(16) not null,
    profileActivationToken char(32),
    profileEmail varchar(128) not null,
    profileHandle varchar(32) not null,
    profileHash char(97) not null,
    profileImage varchar(255),
    profileName varchar(32) not null,
    profilePhoneNumber varchar(32) not null,
    unique(profileHandle),
    unique(profileEmail),
    primary key(profileId)
);

create table category (
                          categoryId     binary(16)   not null,
                          categoryName       varchar(255) not null,
                          primary key (categoryId)
);

create table tool(
    toolId binary(16) not null,
    toolCategoryId binary(16) not null ,
    toolProfileId binary(16) not null,
    toolDescription varchar(500) not null,
    toolImage varchar(255),
    toolLat float(6),
    toolLendRules varchar(500) not null,
    toolLong float(6),
    toolName varchar(32) not null,
    toolPostDate datetime(6) not null,
    index (toolCategoryId),
    index(toolProfileId),
    foreign key (toolCategoryId) references category(categoryId),
    foreign key(toolProfileId) references profile(profileId),
    primary key(toolId)
);



create table borrow (
    borrowId binary(16) not null,
    borrowProfileId binary(16) not null,
    borrowToolId binary(16) not null,
    borrowCompleted varchar(20) not null,
    borrowDateTime datetime(6),
    borrowReturnedDateTime datetime(6),
    index(borrowToolId), index(borrowProfileId),
    foreign key (borrowProfileId) references profile(profileId),
    foreign key(borrowToolId) references tool(toolId),
    primary key (borrowId)
);

create table rating (
    ratingBorrowerProfileId binary(16) not null ,
    ratingLenderProfileId binary(16) not null ,
    ratingProfileId binary(16) not null,
    ratingValue varchar(500) not null,
    index(ratingBorrowerProfileId),
    index(ratingLenderProfileId),
    index (ratingProfileId),
    foreign key (ratingProfileId) references profile(profileId),
    foreign key (ratingBorrowerProfileId) references borrow(borrowProfileId),
    foreign key (ratingLenderProfileId) references profile(profileId),
    primary key (ratingBorrowerProfileId, ratingLenderProfileId, ratingProfileId)
)