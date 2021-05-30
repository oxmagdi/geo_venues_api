#!/bin/sh

# while !</dev/tcp/db/3306; 
# do 
#          sleep 1
# done
set -e           # Stop on any error
npx sequelize-cli db:migrate  # Run migrations
exec "$@"        # Run the command as the main container process
