import { ScheduleTime } from '.';

export enum Daily {
	Arena,
	DuoBattleOfYggdrasil,
	ExtremeChallenge,
	GuildPhantomHunt,
	GuildFeast,
	GuildQuiz,
	RuneFashion,
	TheGuildLeague,
	ThemedParty,
	TimeSpaceAbnormality,
	WarOfEmperium,
	WeekendBanquet,
}

export const getDailies = (date: Date): Daily[] => {
	const day = date.getDay() as Day;
	
	switch (day) {
		case 0:
		// Domingo
		return [Daily.DuoBattleOfYggdrasil, Daily.ThemedParty, Daily.GuildPhantomHunt, Daily.WarOfEmperium];
		
		case 1:
		// Segunda
		return [Daily.ExtremeChallenge, Daily.GuildQuiz];
		
		case 2:
		// terça
		return [Daily.GuildFeast, Daily.TimeSpaceAbnormality, Daily.TheGuildLeague];
		
		case 3:
		// quarta
		return [Daily.RuneFashion, Daily.GuildQuiz, Daily.Arena];
		
		case 4:
		// quinta
		return [Daily.GuildFeast, Daily.GuildPhantomHunt, Daily.TheGuildLeague];
		
		case 5:
		// sexta
		return [Daily.GuildQuiz];
		
		case 6:
		// sabado
		return [Daily.DuoBattleOfYggdrasil, Daily.WeekendBanquet, Daily.TimeSpaceAbnormality, Daily.TheGuildLeague];
	}
};

export const getDailyDuration = (value: Daily): Duration => {
	switch (value) {
		case Daily.Arena:
		return { minutes: 35 };
		
		case Daily.DuoBattleOfYggdrasil:
		return { hours: 14 };
		
		case Daily.GuildPhantomHunt:
		case Daily.GuildFeast:
		case Daily.WeekendBanquet:
		return { minutes: 20 };
		
		case Daily.ExtremeChallenge:
		case Daily.RuneFashion:
		return { hours: 19 };
		
		case Daily.TheGuildLeague:
		return { minutes: 25 };
		
		case Daily.ThemedParty:
		return { minutes: 30 };
		
		case Daily.GuildQuiz:
		return { minutes: 15 }
		
		case Daily.TimeSpaceAbnormality:
		return { minutes: 13 };
		
		case Daily.WarOfEmperium:
		return { hours: 1, minutes: 10 };
	}
};

export const getDailyTime = (value: Daily): ScheduleTime => {
	switch (value) {
		case Daily.ExtremeChallenge:
		case Daily.RuneFashion:
		return { hours: 5, minutes: 0 };
		
		case Daily.DuoBattleOfYggdrasil:
		return { hours: 10, minutes: 0 };
		
		case Daily.GuildQuiz:
		case Daily.GuildFeast:
		case Daily.ThemedParty:
		case Daily.WeekendBanquet:
		return { hours: 20, minutes: 0 };
		
		case Daily.Arena:
		return { hours: 20, minutes: 25 };
	
		case Daily.GuildPhantomHunt:
		case Daily.TimeSpaceAbnormality:
		return { hours: 20, minutes: 30 };
		
		case Daily.TheGuildLeague:
		return { hours: 20, minutes: 55 };
		
		case Daily.WarOfEmperium:
		return { hours: 21, minutes: 20 };
	}
};
