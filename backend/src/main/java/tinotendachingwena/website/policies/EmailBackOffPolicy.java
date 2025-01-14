package tinotendachingwena.website.policies;

import java.util.concurrent.ThreadLocalRandom;

public class EmailBackOffPolicy {
    private static final int MAX_THREAD_TIMEOUT = 1500;
    private final int delay;

    public EmailBackOffPolicy(int delay) {
        this.delay = delay;
    }

    /**
     * Calculates the random back off time for the current thread executing an order.
     * @return random back off time for the thread holding this context
     */
    public Long calculateBackOff(){
        return ThreadLocalRandom.current().nextLong(delay, MAX_THREAD_TIMEOUT);
    }
}
