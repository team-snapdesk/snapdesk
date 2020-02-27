-- Describes the details of each user
CREATE TABLE "users"
(
  "_id" serial NOT NULL,
  "name" varchar(255),
  "active_room" integer,
  "email" varchar(255),
  "bio" TEXT,
  "github_id" integer NOT NULL UNIQUE,
  "avatar_url" varchar(255) NOT NULL UNIQUE,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);

-- Describes the relationship between what rooms belong to what users and what users belong to what rooms
CREATE TABLE "rooms_users"
(
  "user_id" integer NOT NULL,
  "room_id" integer NOT NULL,
  "banned" boolean,
  CONSTRAINT "rooms_users_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("_id"),
  CONSTRAINT "rooms_users_fk1" FOREIGN KEY ("room_id") REFERENCES "rooms"("_id")
)
WITH (
  OIDS=FALSE
);

-- Describes the details of each ticekt
CREATE TABLE "tickets"
(
  "_id" serial NOT NULL,
  "room_id" integer NOT NULL,
  "topic" varchar(255),
  "snaps_given" integer NOT NULL,
  "mentee_id" integer NOT NULL,
  "mentor_id" integer,
  "status" varchar(255) NOT NULL,
  "message" TEXT NOT NULL,
  "feedback" TEXT,
  "timestamp" TIMESTAMP NOT NULL,
  CONSTRAINT "tickets_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);

-- Describes the details of each room
CREATE TABLE "rooms"
(
  "_id" serial NOT NULL,
  "name" varchar(255) NOT NULL,
  "admin_id" integer NOT NULL,
  CONSTRAINT "rooms_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);

ALTER TABLE "tickets" ADD CONSTRAINT "tickets_fk0" FOREIGN KEY ("mentee_id") REFERENCES "users"("_id");
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_fk1" FOREIGN KEY ("mentor_id") REFERENCES "users"("_id");
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_fk0" FOREIGN KEY ("admin_id") REFERENCES "users"("_id");
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_fk2" FOREIGN KEY ("room_id") REFERENCES "rooms"("_id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("active_room") REFERENCES "rooms"("_id");