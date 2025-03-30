interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }
  
  const myProfile = { name: "musa", age: 25, email: "musa@564gmail.com" };
  console.log(updateProfile(myProfile, { age: 26 }));