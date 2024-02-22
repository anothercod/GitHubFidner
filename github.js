class Github {
    constructor() {
        // this.client_id = 'd9308aacf8b204d361fd';
        // this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
        this.access_token = '';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = 
        await fetch(
            `https://api.github.com/users/${user}`,
            {
                headers: { Authorization: 'token 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'}
            }
        );

        const repoResponse =
        await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
            {
                headers: { Authorization: 'token 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'}
            }
        );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}

