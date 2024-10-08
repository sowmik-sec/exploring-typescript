type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   experience: number;
//   expertise: string;
// };
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}
type JuniorDeveloper = NoobDeveloper & {
  experience: number;
  expertise: string;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Lexi Lore",
  expertise: "Javascript",
  experience: 1,
};

const developer: NextLevelDeveloper = {
  name: "Json Luv",
  expertise: "JS TS",
  experience: 6,
  leadershipExperience: 2,
  level: Level.junior,
};
