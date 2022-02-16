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
    toolDescription varchar(255) not null,
    toolLendRules varchar(255) not null,
    index(toolProfileId),
    foreign key(toolProfileId) references profile(profileId),
    primary key(toolId)
);
