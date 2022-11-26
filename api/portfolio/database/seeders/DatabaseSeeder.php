<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
// use App\Models\Messages;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // USERS
        User::create([
          'name' => 'user1',
          'email' => 'user1@gmail.com',
          'password' => Hash::make('password1'),
        ]);
        User::create([
          'name' => 'user2',
          'email' => 'user2@gmail.com',
          'password' => Hash::make('password2'),
        ]);
        User::create([
          'name' => 'user3',
          'email' => 'user3@gmail.com',
          'password' => Hash::make('password3'),
        ]);


        // MESSAGES
        // Messages::create([
        //   'user_id' => 1,
        //   'board_id' => 1,
        //   'title' => 'Twilio integration',
        //   'desc' => 'Finally implementing Twilio into the application workflow',
        //   'color' => '#BADA55'
        // ]);
    }
}
