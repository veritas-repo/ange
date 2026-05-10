#!/bin/bash
#SBATCH --job-name=hellow-world
#SBATCH --output=hellow_world.out
#SBATCH --error=hellow_world.err
#SBATCH --time=00:01:00
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=256M

python3 print_hellow_world.py
