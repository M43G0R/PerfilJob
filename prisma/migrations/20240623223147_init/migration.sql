-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "typeuser" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "StudentProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageProfile" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "career" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "work" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "knowledge" TEXT NOT NULL,
    "studentExtraId" INTEGER NOT NULL,
    CONSTRAINT "StudentProfile_studentExtraId_fkey" FOREIGN KEY ("studentExtraId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompanyProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageProfile" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "companyProfile" INTEGER NOT NULL,
    CONSTRAINT "CompanyProfile_companyProfile_fkey" FOREIGN KEY ("companyProfile") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobId" INTEGER NOT NULL,
    "postularionId" INTEGER NOT NULL,
    CONSTRAINT "Job_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "CompanyProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Job_postularionId_fkey" FOREIGN KEY ("postularionId") REFERENCES "Postulation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Postulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "Postulation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProfile_studentExtraId_key" ON "StudentProfile"("studentExtraId");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyProfile_companyProfile_key" ON "CompanyProfile"("companyProfile");

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobId_key" ON "Job"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "Job_postularionId_key" ON "Job"("postularionId");

-- CreateIndex
CREATE UNIQUE INDEX "Postulation_studentId_key" ON "Postulation"("studentId");
