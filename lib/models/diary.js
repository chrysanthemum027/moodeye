const { getCollection } = require("../database");

async function readDiary(userID, limit) {
  const diaryCollection = await getCollection("diary");
  const sorting = { date: -1 };
  const diary = await diaryCollection
    .find({ userID })
    .sort(sorting)
    .limit(limit)
    .toArray();
  if (!diary) {
    return null;
  }
  return diary;
}

async function writeDiaryEntry(
  mood,
  dayInOneWord,
  whatWasGood,
  whatCouldBeBetter,
  diaryEntry,
  userID,
  date
) {
  const diaryCollection = await getCollection("diary");
  const newDiaryEntry = await diaryCollection.insertOne({
    mood,
    dayInOneWord,
    whatWasGood,
    whatCouldBeBetter,
    diaryEntry,
    userID,
    date,
  });
  if (!newDiaryEntry) {
    throw new Error("Nothing to post");
  }
  return newDiaryEntry;
}

exports.writeDiaryEntry = writeDiaryEntry;
exports.readDiary = readDiary;
