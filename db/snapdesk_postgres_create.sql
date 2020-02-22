CREATE TABLE "users" (
	"_id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"email" varchar(255) NOT NULL UNIQUE,
	"bio" TEXT NOT NULL,
	"github_pic" bytea(255) NOT NULL UNIQUE,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tickets" (
	"_id" serial NOT NULL,
	"topic" varchar(255) NOT NULL,
	"snaps_given" integer NOT NULL,
	"mentee_id" integer NOT NULL,
	"mentor_id" integer NOT NULL,
	"status" varchar(255) NOT NULL,
	"message" TEXT NOT NULL,
	"feedback" TEXT NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	CONSTRAINT "tickets_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "tickets" ADD CONSTRAINT "tickets_fk0" FOREIGN KEY ("mentee_id") REFERENCES "users"("_id");
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_fk1" FOREIGN KEY ("mentor_id") REFERENCES "users"("_id");

