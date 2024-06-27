import pb from "@/lib/pocketbase";

export async function logInWithGoogle() {
    try {
      pb.authStore.clear()
      const authData = await pb.collection('user').authWithOAuth2({
        provider: 'google',
       
      })

      const user = pb.authStore.model;

      if(user){
        const username = authData.meta?.name;

        await pb.collection('user').update(user.id, {
          name: username
        })
      }

      return true;

    } catch (e: any) {
      console.log(e.response)
    }
  }

export async function logout() {
    try {
        pb.authStore.clear();
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        throw error;
    }
}

export function isLoggedIn(): boolean {
    return pb.authStore.isValid
}

export function getUserId():string {
  const id = pb.authStore.model?.id;
  return id;
}