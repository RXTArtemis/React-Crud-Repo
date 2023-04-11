const SUBSCRIPTIONS_ENDPOINT = 'https://642a2fd700dfa3b54740f1fb.mockapi.io/Subscription';

class SubscriptionsApi  {
    get = async () =>{
        try{
        const resp = await fetch(SUBSCRIPTIONS_ENDPOINT);
        const data = await resp.json();
        return data;
        }catch (e) {
            console.log('Oops, looks like fetchSubscriptions had an issue.', e);
        }  
    }

    put = async (subscription)=> {
        try{
            const resp = await fetch(`${SUBSCRIPTIONS_ENDPOINT}/${subscription._id}`,{
                method: 'PUT',
                headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscription)
            });
            return await resp.json();
        }catch(e){
            console.log('Oops, looks like updating subscription had an issue.', e);
        }
     }
        
     }

     export const subscriptionsApi = new SubscriptionsApi();